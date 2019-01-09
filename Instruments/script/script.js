var Ids = 
[
[
{ButtonId:"IDB", DropId:"IDD"},
{ButtonId:"WDB", DropId:"WDD"},
{ButtonId:"SDB", DropId:"SDD"},
{ButtonId:"PDB", DropId:"PDD"}
],
[
{ButtonId:"WDB0", DropId:"WDDC0"},
{ButtonId:"WDB1", DropId:"WDDC1"}
],
[
{ButtonId:"SDB0", DropId:"SDDC0"},
{ButtonId:"SDB1", DropId:"SDDC1"},
{ButtonId:"SDB2", DropId:"SDDC2"}
],
[
{ButtonId:"PDB0", DropId:"PDDC0"},
{ButtonId:"PDB1", DropId:"PDDC1"}
]
];

function Display(i, j)
{	
	if(!document.getElementById(Ids[i][j].DropId).classList.contains('show'))
	{
		var k, l;
		
		for(k = (i == 0) ? 0 : 1; k < Ids.length; k++)
		{
			for(l in Ids[k])
			{
				if(document.getElementById(Ids[k][l].DropId).classList.contains('show'))
				{
					document.getElementById(Ids[k][l].DropId).classList.toggle('show');
					document.getElementById(Ids[k][l].ButtonId).classList.toggle('clicked');
				}
			}
		}
	}
	document.getElementById(Ids[i][j].DropId).classList.toggle('show');
	document.getElementById(Ids[i][j].ButtonId).classList.toggle('clicked');
}

window.onclick = function(event)
{	
	if(!event.target.matches('.SNButton') && !event.target.matches('.DropButton'))
	{
		var i, j;
	
		for(i in Ids)
		{
			for(j in Ids[i])
			{
				if(document.getElementById(Ids[i][j].DropId).classList.contains('show'))
				{
					document.getElementById(Ids[i][j].DropId).classList.toggle('show');
					document.getElementById(Ids[i][j].ButtonId).classList.toggle('clicked');
				}
			}
		}
	}
}