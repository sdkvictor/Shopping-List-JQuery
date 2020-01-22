
  
function addItem(){
    $('#additems').submit(function(event){
        event.preventDefault();
        console.log("submit");
        if(input.value!=''){
            $('#itemList').append(
                `
                <ul class="newItem">
                    <li class="itemName"> <p> ${ input.value } </p>
                                <button type="button" class="checkButton">
                                    check
                                </button>
                                <button type="button" class="deleteButton">
                                    delete
                                </button>
                    </li>
                </ul>
                `
            )
        }
    });
}

function itemButtons(){
    $('#itemList').on('click', '.checkButton', function(event){
        console.log("check button");
        console.log(event.target);
        $(event.target).parent().find('p').toggleClass('checkedItem');
    });

    $('#itemList').on('click', '.deleteButton', function(event){
        console.log("delete button");
        console.log(event.target);
        $(event.target).parent().parent().remove();
    });
}

function init(){
    $( addItem );
    $ ( itemButtons );
  }
  
$( init );