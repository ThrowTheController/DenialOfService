var health : int = 10;
var wayPoints : Transform[];
var targetWayPoint : Transform;
var currentWayPoint = 0;

var speed : float = 4f;

function Hit (Damage : int)
{
	health -= Damage;
}

function Update ()
{
	if (health <= 0)
	{
		GameObject.Find("Spawner").SendMessage("SpawnKilled");
		Destroy(gameObject);
	}

	Move();
}

function Move()
{
	transform.forward = Vector3.RotateTowards(transform.forward, targetWayPoint.position - transform.position, speed*Time.deltaTime, 0.0f);

	transform.position = Vector3.MoveTowards(transform.position, targetWayPoint.position, speed*Time.deltaTime);

	if (transform.position == targetWayPoint.position)
	{
		currentWayPoint++;
		targetWayPoint = wayPoints[currentWayPoint];
	}
}

function SetWayPoints(WayPoints : Transform[])
{
	wayPoints = WayPoints;
	targetWayPoint = WayPoints[0];
}