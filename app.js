console.log('welcome to notes app. this is app.js');
shownotes();
//if user adds a note , add it to the localstorage 
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e)

{
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
       noteobj = [];
    }
    else
    {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value="";
    //console.log(notesobj);
    shownotes();

});

//function to show elements from localstorage

function shownotes(){

let notes = localStorage.getItem('notes');
    if(notes == null)
    {
       notesobj = [];
    }
    else
    {
        notesobj = JSON.parse(notes);
    }

    let html ="";
    notesobj.forEach(function (element, index)
    {
        html+= `
        
        <div class="notecard my-4 mx-4 card" style="width: 18rem;">
        <div class="card-body">
         <h5 class="card-title">Note ${index+1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete note</button>
       </div>
     </div> `;
    }
    );

    let notesElm = document.getElementById("notes");
    if(notesobj.length !=0)
    {
        notesElm.innerHTML = html;

    }
    else
    {
        notesElm.innerHTML =`nothing to show! use " Add a Note" section above to add notes.`;
    }
}

// function to delete a note 

function deletenote(index)
{
    console.log('i am deleting ');
    let notes = localStorage.getItem('notes');
    if(notes == null)
    {
       notesobj = [];
    }
    else
    {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function()

{
    let inputval = search.value.toLowerCase();
   // console.log('input event fired.', inputval);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function (element)
    {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;

        if (cardtxt.includes(inputval))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    })
    
})

