$(document).ready(function() {
    let data = [];

    const renderTable = () => {
        const table = $('table tbody');
        table.empty();
        data.forEach((item, index) => {
            const row = $('<tr></tr>');
            row.append(`<td>${item.name}</td>`);
            row.append(`<td>${item.email}</td>`);
            row.append(`
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editItem(${index})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            `);
            table.append(row);
        });
    };

    window.editItem = (index) => {
        $('#index').val(index);
        $('#name').val(data[index].name);
        $('#email').val(data[index].email);
    };

    window.deleteItem = (index) => {
        data.splice(index, 1);
        renderTable();
    };

    $('#crud-form').on('submit', function(e) {
        e.preventDefault();
        const index = $('#index').val();
        const name = $('#name').val();
        const email = $('#email').val();

        if (index === '') {
            data.push({ name, email });
        } else {
            data[index] = { name, email };
            $('#index').val('');
        }

        $('#crud-form')[0].reset();
        renderTable();
    });
});
