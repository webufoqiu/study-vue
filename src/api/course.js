export function getCourses() {
    return new Promise(resolve => {
        setTimeout(() => {
            // 修改数据结构，对象方式呈现数据，对应course-list组件修改模板中数据的处理
            resolve([{ name: 'web全栈' ,price: 8999 }, { name: 'web高级' ,price: 6999 }])
        }, 2000);
    })
}