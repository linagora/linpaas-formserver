var currentFormModel;

function requestFormCreation() {
	var formName = currentFormModel[0].name;
	var formModel = getObjectFormArray(currentFormModel);

	var form = {
		name : formName,
		//model : {} //should be formModel but does not work
		model : formModel
	};

	console.log('SENT : '+JSON.stringify(form));

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

function requestFormLoad() {
	$.getJSON("/forms/"+$('#input').val(), function (data){
		//$('#result').text(JSON.stringify(data));

		//TODO currentFormModel = getArrayFromObject(data);

		PubSub.trigger('loadForm');
	});
}

function saveCurrentFormModel(model) {
	console.log("MODEL : "+JSON.stringify(model));
	currentFormModel = model;
}

function getObjectFormArray(array) {
	var obj = new Object();
	for(i=0; i<array.length; i++) {
		obj['field'+i] = array[i];
	}
	return obj;
}

//function getArrayFromObject
