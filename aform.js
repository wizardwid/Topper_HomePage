document.addEventListener('DOMContentLoaded', function() {
    const dormitoryInput = document.getElementById('room-num');
    const dormiRadioButtons = document.querySelectorAll('input[name="dormi"]');
    
    // 기숙사 여부 선택 시 호실 입력란 표시 여부
    dormiRadioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'dormitory') {
                dormitoryInput.style.display = 'block'; // 기숙사 선택 시 호실 입력란 보이기
            } else {
                dormitoryInput.style.display = 'none';  // 통학 선택 시 호실 입력란 숨기기
            }
        });
    });
    
    // 폼 제출 시 모달을 띄우는 스크립트
    document.getElementById("applicationForm").addEventListener("submit", function(event) {
        // 기본 제출 동작 막기
        event.preventDefault();
        
        // 서버로 제출하는 대신 모달 띄우기
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    });
});
