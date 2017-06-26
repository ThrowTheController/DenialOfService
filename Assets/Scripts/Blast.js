// Blast.js

function Update()
{
    if (Input.GetButtonDown("Fire1"))
    {
        var blastSound : AudioSource = GetComponent.<AudioSource>();
        blastSound.Play();
        GetComponent.<Animation>().Play("Blast");
    }
}