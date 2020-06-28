$(function () {
    let input = $('#inpbox')
    let add = $('#add')
    let reset = $('#reset')
    let sort = $('#sort')
    let cleanup = $('#cleanup')
    let list = $('#list')
    let sub = $('.subtext')
    let sampletext = true
    
    input[0].value = ""
    
    input[0].onclick = function () {
        input.val("")
    }
    
    reset.click(function () {
        input.val("")
        lightwhenadded()
    })
    
    let alllielements = $('#list li')
    alllielements.click(function (event) {
        if (event.target.classList[0] == "strike") {
            event.target.classList.remove("strike")
        } else {
            event.target.classList.add("strike")
        }
    })
    
    alllielements.dblclick(delitems)

    function delitems(event) {
        event.target.remove()
        if($('#list li').length==0){
            lightsortcleanelement()
        }
    }
   
    add.click(additem);

    function additem() {
        if (input.val() == "") {
            console.log("error entry null")
            sub.text("Error: input something").css('color', 'red')
            input.css('border', 'solid red 2px')
        } else {
            sub.text("a short one line description of your task").attr('style', null)
            input.attr('style', null)
            if (sampletext) {
                list.empty()
                sampletext = false;
            }
            lightwhenadded()
            if($('#list li').length==0){
                sort[0].classList.add('active')
                cleanup[0].classList.add('active')
            }
            let inputtext = input.val()
            let element = $(`<li>${inputtext}</li>`)
            list.prepend(element)
            element[0].onclick = function (event) {
                if (event.target.classList[0] == "strike") {
                    event.target.classList.remove("strike")
                } else {
                    event.target.classList.add("strike")
                }
            }
            $('#list li').dblclick(delitems)
        }
    }
    
    
    sort.click(sortitems)

    function sortitems(event) {
        let removeditems = $('.strike').remove()
        list.append(removeditems)
    }
    
    
    cleanup.click(clean)

    function clean(event) {
        $('.strike').remove()
    }
    
    
    input[0].addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            additem()
            input.val("")
        }
    })

    
    function lightwhenadded() {
        add[0].classList.remove('active')
        reset[0].classList.remove('active')
    }
    
    
    input[0].oninput = function () {
        add[0].classList.add('active')
        reset[0].classList.add('active')
    }

    function lightsortcleanelement() {
        sort[0].classList.remove('active')//because already dark
        cleanup[0].classList.remove('active')
    }


    
})