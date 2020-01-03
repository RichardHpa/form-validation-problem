$('#form').submit(function(e){
    let valid = true;
    //remove the errors from last submit
    $('.error').removeClass('error');
    //get all values
    const email = $('#email');
    const password = $('#password');
    const colour = $('#colour');
    const animals = $('input[name="animal"]');

    //check email
    const emailPattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    if(!email.val()){
        email.parent().addClass('error');
        valid = false;
    } else if(!emailPattern.test(email.val())){
        email.parent().addClass('error');
        valid = false;
    }

    //check password
    if(!password.val()){
        password.parent().addClass('error');
        valid = false;
    } else if(password.val().length > 8){
        password.parent().addClass('error');
        valid = false;
    }

    //check colour
    if(!colour.val()){
        colour.parent().addClass('error');
        valid = false;
    }

    //check animails
    let checkedAnimals = [];
    animals.each(function(i){
        if($(this).is(':checked')){
            checkedAnimals.push($(this).val());
        }
    })

    if(checkedAnimals.length < 2){
        animals.parent().addClass('error');
        valid = false;
    }

    //check tiger type
    if(jQuery.inArray('tiger', checkedAnimals) !== -1){
        const tigerType = $('#tiger_type');
        if( !tigerType.val() ){
            tigerType.parent().addClass('error');
            valid = false;
        }
    }
    if(valid === false){
        return false;
    }
})
