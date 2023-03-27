
const fileInput = document.getElementById('fileInput');
const openModal = () => {
    document.getElementById("modal").style.display = "block";
}

const closeModal = () => {
    document.getElementById("modal").style.display = "none";
}



fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    showFilesInTreeView(files);
});


const showFilesInTreeView = (files) => {
    const treeView = document.getElementById('treeView');
    treeView.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop();
        const fileNode = document.createElement('div');
        fileNode.innerHTML = fileName;
        const extensionNode = document.createElement('span');
        extensionNode.innerHTML = fileExtension;
        fileNode.appendChild(extensionNode);

        treeView.appendChild(fileNode);
    }
}