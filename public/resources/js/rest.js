var currentFormModel;

function requestFormCreation() {
//	var form = {
//		name : $('#input').val(),
//		model : {
//			foo: 'bar',
//			bar: 'baz'
//		}
//	}

	var formName = currentFormModel[0].name;
	var formModel = currentFormModel;

	var form = {
		name : formName,
		model : {} //should be formModel but does not work
	}

	console.log(JSON.stringify(form));

	$.ajax({
		type: "POST",
		url: "/forms",
		dataType: "json",
		data: form,
		success: function (data)
		{
			$('#result').text(JSON.stringify(data));
		}
	});
}

function requestFormDeletion() {
	$.ajax({
		type: "DELETE",
		url: "/forms/"+$('#input').val(),
		success: function (data)
		{
			$('#result').text(data);
		}
	});
}

function requestFormFind() {
	$.getJSON("/forms?name="+$('#input').val(), function (data){
		$('#result').text(JSON.stringify(data));
	});
}

function saveCurrentFormModel(model) {
	console.log("MODEL : "+JSON.stringify(model));
	currentFormModel = model;
}
