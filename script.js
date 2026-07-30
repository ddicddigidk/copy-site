function toggleText(index) {
    const textElement = document.getElementById(`text-${index}`);
    if (textElement) {
        textElement.classList.toggle('hidden');
    }
}

function copyToClipboard(index) {
    const textElement = document.getElementById(`text-${index}`);
    const messageElement = document.getElementById(`message-${index}`);
    
    if (textElement) {
        const text = textElement.innerText;
        
        navigator.clipboard.writeText(text).then(() => {
            if (messageElement) {
                messageElement.classList.add('show');
                setTimeout(() => {
                    messageElement.classList.remove('show');
                }, 1500);
            }
        }).catch(err => {
            console.error('복사 실패:', err);
            alert('복사에 실패했습니다.');
        });
    }
}
