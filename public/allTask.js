console.log('welcome to all task.js')
$('#tables').hide();
$('#find').click(() => {
    $('#tables').show();
    const name = $('#name').val()
    $.get(`/api/tasks/${name}` , (data) => {
        let str = "";
        for (const d of data) {
            str += `
            <tr>
                <th scope="row">${d.id}</th>
                <td>${d.name}</td>
                <td>${d.task}</td>
            </tr>
            `
        }
        $('#values').append(str)
    })
})