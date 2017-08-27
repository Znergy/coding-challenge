$(document).ready(() => {
  $(".getPanel").hide()
  $(".getSingleView").hide()
  $("#activatePostPanel").on('click', () => {
    $("#postForm").show()
    $(".getPanel").hide()
    $(".postPanel").show()
  })
  $("#postForm").submit((e) => {
    e.preventDefault()

    let $inputs = $('#postForm :input')
    let values = { tasks: [] }
    $inputs.each(function() {
      if(!this.name.includes("task")) {
        if(this.name !== 'button') {
        values[this.name] = $(this).val()
        }
      } else {
        values.tasks.push($(this).val())
      }
    })

    // Add Item
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/v1/todolists',
      body: { username: values.username, title: values.title, category: values.category, tasks: values.tasks },
      success: function(data){
        console.log('success: ' + data)
      },
      error: function(){
        console.log('error')
      }
    })

    $("#postForm").hide()
    resetGetPanel()

  })
  $("#activateGetPanel").on('click', () => {
    resetGetPanel()
  })
  $("ul#getUlList li").on('click', () => {
    $(".getListView").hide()
    $(".getSingleView").show()
    $("#todolistDetailView").show()
    $("#updateInputs").hide()
  })
  $("#updateTodolist").on('click', () => {
    $("#todolistDetailView").hide()
    $("#updateInputs").show()
  })
  $("#deleteTodolist").on('click', () => {
    resetGetPanel()
  })
})

function resetGetPanel() {
  $(".getPanel").show()
  $(".postPanel").hide()
  $(".getListView").show()
  $(".getSingleView").hide()
  $("#updateInputs").hide()
  $("#todolistDetailView").hide()
}
