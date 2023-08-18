const fields = {
    name: {
        name: "name",
        placeholder: "Ім'я",
        required: true,
    },
    lastName: {
        name: "lastName",
        placeholder: "Прізвище",
        required: true,
    },
    phone: {
        name: "phone",
        placeholder: "Номер телефону",
        required: true,
    },
    email: {
        name: "email",
        placeholder: "Ел адреса",
        required: true,
    },
    address: {
        name: "address",
        placeholder: "Ваша адреса",
    },
    deliveryDepartment: {
      name:  "deliveryDepartment",
      placeholder: "Відділення доставки"
    },
    comment: {
        name: "comment",
        placeholder: "Введіть текст коментаря",
        required: false,
    },
}

export default fields;