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
    $("#detailh2").text('Update To Do List')
    showUpdateForm()
  })
  $("#deleteTodolist").on('click', () => {
    let id = $("#deleteTodolist").attr('todolistID')
    deleteTodolist(id)
    openGetPanel()

  })
  $(document).on('click', '.getList', (e) => {
    let id = e.currentTarget.id
    openSingleView(id)
  })
  $("#saveUpdate").on('click', () => {
    let id = $("#saveUpdate").attr('todolistID')
    saveUpdate(id)
  })
  $("#cancelUpdate").on('click', () => {
    hideUpdateForm()
  })
})

function deleteTodolist(id) {
  $.ajax({
    method: 'DELETE',
    url: `api/v1/todolists/${id}`,
    success: function(res) {
      console.log(res)
    },
    error: function(err) {
      alert(err)
      console.log(err)
    }
  })
}

function saveUpdate(id) {
  let todolist = {
      username: $("#updateUsername").val(),
      title: $("#updateTitle").val(),
      category: $("#updateCategory").val(),
      tasks: [$("#updateTask1").val(), $("#updateTask2").val(), $("#updateTask3").val()]
  }

  $.ajax({
    method: 'PUT',
    url: `api/v1/todolists/${id}`,
    data: JSON.stringify(todolist),
    contentType: 'application/json',
    success: function(res) {
      console.log(res)
      hideUpdateForm()
      openSingleView(id)
    },
    error: function(err) {
      alert(err)
      console.log(err)
    }
  })
}

function hideUpdateForm() {
  $("#detailh2").text("Detail View")
  $("#updateTodolist").show()
  $("#deleteTodolist").show()
  $("#saveUpdate").hide()
  $("#cancelUpdate").hide()
  $("#todolistDetailView").show()
  $("#updateInputs").hide()
}

function showUpdateForm() {
  let id = $("#currentTitle").attr('todolistID')
  $.ajax({
    method: 'GET',
    url: `api/v1/todolists/${id}`,
    success: function(todolist) {
      console.log(todolist)
      $("#updateTitle").val(`${todolist.title}`)
      $("#updateCategory").val(`${todolist.category}`)
      $("#updateTask1").val(`${todolist.tasks[0]}`)
      $("#updateTask2").val(`${todolist.tasks[1]}`)
      $("#updateTask3").val(`${todolist.tasks[2]}`)
      $("#updateUsername").val(`${todolist.username}`)
    },
    error: function(err){
      alert(`ERROR: ${err.responseJSON.errmsg}`)
      console.log(`ERROR: ${err.responseJSON.errmsg}`)
    }
  })
  $("#updateTodolist").hide()
  $("#deleteTodolist").hide()
  $("#saveUpdate").show()
  $("#saveUpdate").attr('todolistID', id)
  $("#cancelUpdate").show()
  $("#todolistDetailView").hide()
  $("#updateInputs").show()
}


function openSingleView(id) {
  $.ajax({
    method: 'GET',
    url: `api/v1/todolists/${id}`,
    success: function(res) {
      console.log(res)
      $("#todolistDetailView").empty()
      $("#todolistDetailView").append(`
        <div class="form-group">
          <label for="title">Title</label>
          <li class="form-control" id="currentTitle" todolistID="${id}" name="title">${res.title}</li>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <li class="form-control" name="category">${res.category}</li>
        </div>
        <div class="form-group">
          <label for="task1">Task #1</label>
          <li class="form-control" name="task1">${res.tasks[0]}</li>
        </div>
        <div class="form-group">
          <label for="task2">Task #2</label>
          <li class="form-control" name="task2">${res.tasks[1]}</li>
        </div>
        <div class="form-group">
          <label for="task3">Task #3</label>
          <li class="form-control" name="task3">${res.tasks[2]}</li>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <li class="form-control" name="username">${res.username}</li>
        </div>
      `)
    },
    error: function(err){
      alert(`ERROR: ${err.responseJSON.errmsg}`)
      console.log(`ERROR: ${err.responseJSON.errmsg}`)
    }
  })
  $("#deleteTodolist").attr('todolistID', id)
  $(".getListView").hide()
  $(".getSingleView").show()
  $("#todolistDetailView").show()
  $("#updateInputs").hide()
  $("#saveUpdate").hide()
  $("#cancelUpdate").hide()
}

function openGetPanel() {
  $.ajax({
    method: 'GET',
    url: 'api/v1/todolists',
    success: function(res) {
      console.log(res)
      $("#getUlList").empty()
      if(res.length < 1) {
        $("#lvh2").text("No To Do lists to show")
        $(".lv-header").append("<p>Please add a To Do list and come back :)</p>")
      } else {
        $(".lv-header p").empty()
        $("#lvh2").text("To Do Lists")
        res.map((todolist) => {
          $("#getUlList").append(`
            <div class="form-group">
              <li class="getList form-control" name="title" id="${todolist._id}">Title: ${todolist.title}</li>
            </div>
          `)
        })
      }
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
