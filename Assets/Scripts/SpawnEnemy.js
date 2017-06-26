var enemy : GameObject;
var numSpawned : int = 0;
var currSpawned : int = 0;
var spawnDelay : float;
var spawnPoint : Transform;
var wayPointList : Transform[];

var health : int = 100;

var currEnemy : GameObject;

function Spawn()
{
	currEnemy = Instantiate(enemy, spawnPoint.position, spawnPoint.rotation);
	currEnemy.SendMessage("SetWayPoints", wayPointList);
	numSpawned++;
	currSpawned++;
}

function SpawnKilled()
{
	currSpawned--;
}

function Hit(Damage : int)
{
	health -= Damage;
}

function Start()
{
	InvokeRepeating ("Spawn", spawnDelay, spawnDelay);
}

function Update()
{
	if (health <= 0)
	{
		Destroy(gameObject);
	}
}