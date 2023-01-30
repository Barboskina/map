class LevelButtons {

    add(createdLevelMap) {
        let ButtonLayout = ymaps.templateLayoutFactory.createClass([
            `<form  method="POST">
                <div class="pt-2">
                    <input type="submit" name="{{ data.title }}" value="{{ data.content }}" class="btn btn-primary " />
                </div>
            </form>`,
        ].join(''))

        let button1 = new ymaps.control.Button({
            data: {
                content: "1 этаж",
                title: 1,
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
        });

        createdLevelMap.controls.add(button1, {
            float: 'none',
            position: {
                left: '10px',
                top: '70px'
            }
        });

        let button2 = new ymaps.control.Button({
            data: {
                content: "2 этаж",
                title: 2,
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
        });

        createdLevelMap.controls.add(button2, {
            float: 'none',
            position: {
                left: '10px',
                top: '115px'
            }
        });


        let button3 = new ymaps.control.Button({
            data: {
                content: "3 этаж",
                title: 3,
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
        });

        createdLevelMap.controls.add(button3, {
            float: 'none',
            position: {
                left: '10px',
                top: '160px'
            }
        });

        let button4 = new ymaps.control.Button({
            data: {
                content: "4 этаж",
                title: 4,
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
        });

        createdLevelMap.controls.add(button4, {
            float: 'none',
            position: {
                left: '10px',
                top: '205px'
            }
        });
    }
}

// const button = new YMapControlButton({
//     text: 'Привет',
//     onClick: () => alert('Привет Мир!')
//   });