var values = {
    sleep: 100,
    food: 100,
    h2o: 100,
}

var progress = {
    sleep: $('.sleep_progress'),
    food: $('.food_progress'),
    h2o: $('.h2o_progress'),
}
var time = 0


window.fn = function () {
    var name = $('input').val()

    if (name) {
        $('.page_1').hide()
        $('.page_2').show()
        $('.dragon_name').text(name)

        decrease('h2o')
        decrease('food')
        decrease('sleep')

        timeset()
    }
    
}


function decrease(type) {
    values[type] -= 1
    progress[type].attr('value', values[type])
    if (values[type] > 0) {
        setTimeout(function() {
            decrease(type)
        }, 300)
    }
    else {
        death()
    }
}
function increase(type) {
    values[type] += 5;
    progress[type].attr('value', values[type]);
}


function increment_info(type) {
    let selector = '.'+type+' span'
    let span = $(selector)
    let info = span.text()
    info = parseInt(info)
    info += 1
    span.text(info)
    return info
}


function timeset() {
    time += 1
    let duration = 5

    if (time % duration == 0) {
        let lvl = increment_info('LVL') 
      
        if (lvl % 5 == 0) {
            increment_info('AGE')
        }

    }

    setTimeout(timeset, 1000)
}


function death() {
    alert('Your Dragon Died!!')
}

var testing = 1
if (testing) {
    $('button').click()
}

$('.stat').on('click', function (event) {
    const userAction = $(event.currentTarget).text().trim().toLocaleLowerCase()
    increase(userAction)
})
