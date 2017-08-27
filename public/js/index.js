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

    let todolist = {
        username: $("#username").val(),
        title: $("#title").val(),
        category: $("#category").val(),
        tasks: [$("#task1").val(), $("#task2").val(), $("#task3").val()]
    }

    // Add Item
    $.ajax({
      method: 'POST',
      url: 'api/v1/todolists',
      data: JSON.stringify(todolist),
      contentType: 'application/json',
      success: function(res){
        console.log(res)
        alert(res.message)
        $("#username").val('')
        $("#title").val('')
        $("#category").val('')
        $("#task1").val('')
        $("#task2").val('')
        $("#task3").val('')
      },
      error: function(err){
        alert(`ERROR: ${err.responseJSON.errmsg}`)
        console.log(`ERROR: ${err.responseJSON.errmsg}`)
      }
    })

    $("#postForm").hide()
    openGetPanel()

  })
  $("#activateGetPanel").on('click', () => {
    openGetPanel()
  })
  $("ul#getUlList li").on('click', '.getList', () => {
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
    openGetPanel()
  })
  $(document).on('click', '.getList', (e) => {
    let id = e.currentTarget.id
    openSingleView(id)
  })
})


function openSingleView(id) {
  console.log(id)
  $.ajax({
    method: 'GET',
    url: `api/v1/todolists/${id}`,
    success: function(res) {
      console.log(res)
      $("#todolistDetailView").empty()
      $("#todolistDetailView").append(`
        <div class="form-group">
          <li class="form-control" name="title">Title: ${res.title}</li>
        </div>
        <div class="form-group">
          <li class="form-control" name="category">Category: ${res.category}</li>
        </div>
        <div class="form-group">
          <li class="form-control" name="task1">Task #1: ${res.tasks[0]}</li>
        </div>
        <div class="form-group">
          <li class="form-control" name="task2">Task #2: ${res.tasks[1]}</li>
        </div>
        <div class="form-group">
          <li class="form-control" name="task3">Task #3: ${res.tasks[2]}</li>
        </div>
        <div class="form-group">
          <li class="form-control" name="username">By: ${res.username}</li>
        </div>
      `)
    },
    error: function(err){
      alert(`ERROR: ${err.responseJSON.errmsg}`)
      console.log(`ERROR: ${err.responseJSON.errmsg}`)
    }
  })
  $(".getListView").hide()
  $(".getSingleView").show()
  $("#todolistDetailView").show()
  $("#updateInputs").hide()
}

function openGetPanel() {
  $.ajax({
    method: 'GET',
    url: 'api/v1/todolists',
    success: function(res) {
      console.log(res)
      res.map((todolist) => {
        $("#getUlList").append(`
          <div class="form-group">
            <li class="form-control getList" name="title" id="${todolist._id}">${todolist.title}</li>
          </div>
        `)
      })
    },
    error: function(err){
      alert(`ERROR: ${err.responseJSON.errmsg}`)
      console.log(`ERROR: ${err.responseJSON.errmsg}`)
    }
  })
  $(".getPanel").show()
  $(".postPanel").hide()
  $(".getListView").show()
  $(".getSingleView").hide()
  $("#updateInputs").hide()
  $("#todolistDetailView").hide()
}
