# 4 tính chất của OOP

1. Encapsulation /ɪnˌkæp.sjəˈleɪ.ʃən/ (tính đóng gói)

   - Là cách để che dấu những tính chất xử lý **bên trong** của đối tượng, những đối tượng khác không thể tác động trực tiếp làm thay đổi trạng thái chỉ có thể tác động thông qua các method **public** của đối tượng đó.

     - access modified: bảo vệ biến và hàm truy cập từ bên ngoài

       - public: các class khác có thể truy cập được các thuộc tính/hàm đó.
       - protected: class khác folder nhưng được thừa kế thì mới truy cập được, còn nếu không thừa kế thì không truy cập được.
       - default: 2 class mà đặt khác folder sẽ không truy cập nhau được.
       - private: class khác không truy cập được.

     - get
     - set

2. Inheritance /ɪnˈher.ɪ.təns/ (tính kế thừa)

   - Được thể hiện qua interface, interface thì không phải là lớp, nó không có thuộc tính và phương thức chỉ có tên chứ không có thân.
   - Bình thường tính kế thừa là lớp con kế thừa các đặc tính và phương thức của lớp cha, nhưng tính trừu tượng là khi mà các đối tượng của lớp có thể thực hiện được các phương thức của một interface nào đó mà không cần kế thừa thuộc tính, nhưng interface sẽ chỉ định nghĩa phương thức qua tên, còn đối tượng nào muốn thực hiện phương thức của interface đó thì phải “xin phép” interface đó và viết lại chính hàm đó theo cách riêng biệt

     - extends
     - interface

3. Abstraction (tính trừu tượng)

   - Là phương pháp trừu tượng hóa định nghĩa lên những hành động, tính chất của loại đối tượng nào đó cần phải có.

     - abstract
     - interface

4. Polymorphism (tính đa hình)
   - Là thể hiện ở việc nạp chồng phương thức và ghi đè phương thức.
     - Nạp chồng phương thức: Ở cùng 1 class thì 1 phương thức có thể cùng tên nhưng khác tham số và khác kết quả trả về, cũng có thể hiểu là nhiều phương thức có cùng 1 tên.
       - Overloading
     - Ghi đè phương thức: Ở class cha định nghĩa một phương thức theo 1 cách, ở lớp con kế thừa lại lớp cha cũng mang phương thức đó nhưng ta có thể định nghĩa lại phương thức theo một cách khác, khi in kết quả ra màn hình thì sẽ in phương thức của lớp con.
       - Overwrite

# Khác nhau giữa Abstract và Interface

## Khi nào nên dùng abstract

- Có quan hệ **is-a**
  - Khi các lớp con có quan hệ rõ ràng với lớp cha.
  - Lớp cha là một phần trong hệ thống kế thừa.
- Muốn chia sẻ logic chung, và fields giữa các lớp con

```
abstract class Vehicle {
    wheels: number;

    constructor(wheels: number) {
        this.wheels = wheels;
    }

    startEngine(): void {
        console.log("Engine started");
    }

    abstract move(): void;
}

class Car extends Vehicle {
    move(): void {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    move(): void {
        console.log("Bike is riding");
    }
}

```

## Khi nào nên dùng interface

- Định nghĩa hành vi **can-do**
  - Khi các lớp không liên quan có thể thực hiện cùng một hành vi

```
interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    fly(): void {
        console.log("Bird is flying");
    }
}

class Plane implements Flyable {
    fly(): void {
        console.log("Plane is flying");
    }
}

```
