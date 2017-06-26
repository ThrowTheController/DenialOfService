// BlastDamage.js

var Damage : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;

function Update()
{
	if (Input.GetButtonDown("Fire1"))
	{
		var Shot : RaycastHit;
		var player = GameObject.Find("PlayerCamera");
		if (Physics.Raycast (player.transform.position, player.transform.TransformDirection(Vector3.forward), Shot))
		{
			TargetDistance = Shot.distance;
			if (TargetDistance < AllowedRange)
			{
				Shot.transform.SendMessage("Hit", Damage);
			}
		}
	}
}