sabio.page.addAnswer = (data, onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/questions"
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        data: data,
        type: "POST",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.updateQuiz = (data, onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/" + currentQuizID;
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        data: data,
        type: "PUT",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.getIds = (onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/users/ids";
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.getQuizForEdit = (id, onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/" + id;
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.insertQuiz = (data, onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/";
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        data: data,
        type: "POST",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.getQuiz = (onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/employer/" + eId;
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.updateQuestion = (data, id, onSuccess, onError) => {
    let url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/questions/" + id;
    let settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "PUT",
        data: data,
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
}

sabio.page.deleteQuiz = (onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/" + currentQuizID;
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "DELETE",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
}

sabio.page.deleteQuestion = (onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/questions/" + currentQuestID;
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "DELETE",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.domQuiz = (data) => {
    for (let i = 0; i < data.items.length; i++) {
        let quiz = {
            id: data.items[i].id,
            num: (i + 1),
            quizName: data.items[i].quizName,
            active: data.items[i].isActive,
            results: data.items[i].resultsCount
        }
        let html = Mustache.to_html(templates, quiz);
        $("#tableBody").append(html);
    }
};

sabio.page.checkActive = (pId, qId, onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/results/person/" + pId + "/" + qId;
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
};

sabio.page.insertNewResult = (data, onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/results/"
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        data: data,
        type: "POST",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
}

sabio.page.loadQuiz = (id, onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/safe/" + id
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "GET",
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
}

sabio.page.saveAnswer = (data, onSuccess, onError) => {
    const url = "https://pacoima-ypi.azurewebsites.net/api/quizzes/results/answers";
    const settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        type: "POST",
        data,
        xhrFields: {
            withCredentials: true
        },
        success: onSuccess,
        error: onError
    };
    $.ajax(url, settings);
}

const templates =
    '<tr id="{{id}}"><th scope="row">{{num}}</th><td>{{quizName}}</td><td>{{active}}</td><td>{{results}}</td><td><button id="edit" type="button" class="btn btn-default">Edit</button></td></tr>';