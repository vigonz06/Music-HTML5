var Ids = [
{ButtonId:"WDB", DropId:"WDD", CaretUpId:"WCU", CaretDownId:"WCD"}, 
{ButtonId:"SDB", DropId:"SDD", CaretUpId:"SCU", CaretDownId:"SCD"}, 
{ButtonId:"PDB", DropId:"PDD", CaretUpId:"PCU", CaretDownId:"PCD"}
]

function Display(i)
{
	
	if(document.getElementById(Ids[i].DropId).classList.contains('show'))
	{
		document.getElementById(Ids[i].ButtonId).className = 
		document.getElementById(Ids[i].ButtonId).className.substr(0, 
		document.getElementById(Ids[i].ButtonId).className.length - 8);
		document.getElementById(Ids[i].DropId).classList.remove('show');
		document.getElementById(Ids[i].CaretUpId).style.display = 'none';
		document.getElementById(Ids[i].CaretDownId).style.display = 'inline-block';
	}
	else
	{		
		for(var k in Ids)
		{
			if(document.getElementById(Ids[k].DropId).classList.contains('show'))
			{
				document.getElementById(Ids[k].ButtonId).className = 
				document.getElementById(Ids[k].ButtonId).className.substr(0, 
				document.getElementById(Ids[k].ButtonId).className.length - 8);
				document.getElementById(Ids[k].DropId).classList.remove('show');
				document.getElementById(Ids[k].CaretUpId).style.display = 'none';
				document.getElementById(Ids[k].CaretDownId).style.display = 'inline-block';
			}
		}
		document.getElementById(Ids[i].DropId).classList.add('show');
		document.getElementById(Ids[i].ButtonId).className += " clicked";
		document.getElementById(Ids[i].CaretDownId).style.display = 'none';
		document.getElementById(Ids[i].CaretUpId).style.display = 'inline-block';
	}
}

window.onclick = function(event)
{	
	if(!event.target.matches('.SNButton') && !event.target.matches('.DropButton'))
	{	
		for(var i in Ids)
		{
			if(document.getElementById(Ids[i].DropId).classList.contains('show'))
			{
				document.getElementById(Ids[i].ButtonId).className = 
				document.getElementById(Ids[i].ButtonId).className.substr(0, 
				document.getElementById(Ids[i].ButtonId).className.length - 8);
				document.getElementById(Ids[i].DropId).classList.remove('show');
				document.getElementById(Ids[i].CaretUpId).style.display = 'none';
				document.getElementById(Ids[i].CaretDownId).style.display = 'inline-block';
			}
		}
	}
}