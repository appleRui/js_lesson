{

    document.getElementById('fn1').addEventListener('click', () => {
        const liNode = document.createElement('li');
        liNode.textContent = "変更しました"

        const ulNode = document.querySelector('ul');
        ulNode.appendChild(liNode);
    });

    document.querySelector('button').addEventListener('click',() => {
        document.querySelector('h1').textContent = "querySelector";
        const targetNode = document.getElementById('targetId');
        // targetNode.style.color = 'red';
        // targetNode.classList.toggle('my-class');
        if(targetNode.classList.contains('my-class') === true){
            targetNode.classList.remove('my-class');
        }else{
            targetNode.classList.add('my-class');
        }
    });


    function update(){
        document.querySelector('h1').textContent = "querySelector";
        document.getElementById('targetId').textContent = "getElementById"
        document.querySelectorAll('p').forEach((p, index) => {
            p.textContent = `${index}番目のpです！`;
          });
    }
    // setTimeout(update, 1000);
}