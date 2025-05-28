// $(docuemt).ready(function {...}) 안에 있을 경우 dropzone이 먼저 실행되기 때문에 초기화 에러가 발생한다.(옵션이 제대로 안먹히는 이슈 발생)
Dropzone.options.dropzone = {
  paramName          : 'file',
  maxFilesize        : 5,
  acceptedFiles      : '.jpg, .png, .pdf',
  dictDefaultMessage : '파일을 여기로 끌어놓거나 클릭해서 업로드하세요.',
  init : function () {
    this.on('success', function(file, response) {
      console.log('파일 업로드 성공', response);
    });

    this.on('error', function(file, response) {
      console.error('파일 업로드 실패', response);
    })
  }
}