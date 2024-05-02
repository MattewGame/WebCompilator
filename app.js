function compileCode() {
    const jsCode = document.getElementById('javascript').value;
    const htmlCode = document.getElementById('html').value;
    const cssCode = document.getElementById('css').value;

    const result = document.getElementById('result');

    const iframe = document.createElement('iframe');
    result.innerHTML = '';
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    result.appendChild(iframe);

    const combinedCode = `
    <html>
    <head>
        <style>${cssCode}</style>
    </head>
    <body>
        ${htmlCode}
        <script>${jsCode}</script>
    </body>
    </html>
    `;

    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(combinedCode);
    iframeDoc.close();
}
