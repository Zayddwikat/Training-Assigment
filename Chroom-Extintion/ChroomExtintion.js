const Button_input = document.querySelector("#Save-btn")
const Text_input = document.getElementById("Text-id")
let Leads = []
const Ul_list = document.getElementById("ul-el")
const Delete_btn = document.getElementById("Delete-id")
Button_input.addEventListener("click" ,function(){
    Leads.push(Text_input.value)
    Text_input.value=""
    localStorage.setItem("leads",JSON.stringify(Leads))
    Render(Leads)
})
Delete_btn.addEventListener("dblclick" , function()
{
    
    localStorage.clear()
    leadsFromLocalStorage = ""
    Leads= []
    Render(Leads)
})

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))
if(leadsFromLocalStorage)
{
    Leads = leadsFromLocalStorage
    Render(Leads)
}


function Render(lead)
{
    let List_item =""
    for(let i=0 ;i<Leads.length;i++)
        {
            List_item+=`
            <li>
                <a target='_blank' href='${lead[i]}'>
                ${lead[i]}
                </a>
            </li>
            `
        
        }
    Ul_list.innerHTML= List_item
}