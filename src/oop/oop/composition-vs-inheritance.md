# Composition vs Inheritance

## 1. Ý tưởng cốt lõi

OOP không chỉ có inheritance.

Có một nguyên tắc quan trọng:

> **Composition over inheritance**

Hiểu đơn giản:

```text
Inheritance  = "Tôi là cái này"
Composition  = "Tôi có cái này / Tôi sử dụng cái này"
```

---

# 2. Inheritance = IS-A

Ví dụ:

```ts
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}
```

Quan hệ:

```text
Dog IS-A Animal
```

Vì một `Dog` là một `Animal`.

Sử dụng:

```ts
const dog = new Dog();

dog.eat();  // kế thừa từ Animal
dog.bark(); // của Dog
```

Cấu trúc:

```text
       Animal
       ├── eat()
       │
       ▼
       Dog
       └── bark()
```

`Dog` phụ thuộc vào `Animal` thông qua inheritance.

---

# 3. Composition = HAS-A

Ví dụ:

```ts
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(private engine: Engine) {}

  start() {
    this.engine.start();
  }
}
```

Quan hệ:

```text
Car HAS-A Engine
```

Vì một chiếc `Car` có một `Engine`.

Không phải:

```text
Car IS-A Engine ❌
```

Mà:

```text
Car HAS-A Engine ✅
```

Sử dụng:

```ts
const engine = new Engine();
const car = new Car(engine);

car.start();
```

Flow:

```text
car.start()
     ↓
this.engine.start()
     ↓
Engine.start()
```

Cấu trúc:

```text
Car
 │
 └── engine
       │
       ▼
     Engine
       └── start()
```

---

# 4. Tại sao không dùng `Car extends Engine`?

Có thể viết:

```ts
class Car extends Engine {
}
```

Nhưng về mặt domain:

```text
Car IS-A Engine
```

là sai.

Car không phải Engine.

Car **có** Engine.

Một cách rất tốt để kiểm tra inheritance:

> Đọc câu `X is a Y`. Nếu câu đó nghe vô lý thì rất có thể không nên dùng inheritance.

Ví dụ:

```text
Dog IS-A Animal       ✅
Car IS-A Vehicle      ✅

Car IS-A Engine       ❌
Player IS-A Weapon    ❌
```

---

# 5. Composition với nhiều dependency

Ví dụ:

```ts
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Transmission {
  shiftGear() {
    console.log("Gear shifted");
  }
}

class Car {
  constructor(
    private engine: Engine,
    private transmission: Transmission,
  ) {}

  start() {
    this.engine.start();
  }

  shift() {
    this.transmission.shiftGear();
  }
}
```

Car:

```text
Car
├── Engine
└── Transmission
```

Quan hệ:

```text
Car HAS-A Engine
Car HAS-A Transmission
```

Đây là composition.

---

# 6. Ưu điểm lớn của Composition

Composition cho phép thay đổi dependency/behavior mà không cần thay đổi class chính.

Ví dụ:

```ts
interface Engine {
  start(): void;
}

class GasEngine implements Engine {
  start() {
    console.log("Gas engine started");
  }
}

class ElectricEngine implements Engine {
  start() {
    console.log("Electric engine started");
  }
}

class Car {
  constructor(private engine: Engine) {}

  start() {
    this.engine.start();
  }
}
```

Bây giờ có thể tạo:

```ts
const gasCar = new Car(new GasEngine());

const electricCar = new Car(new ElectricEngine());
```

Cấu trúc:

```text
                    Car
                     │
                     │ HAS-A
                     ▼
                   Engine
                     ▲
              ┌──────┴──────┐
              │             │
         GasEngine     ElectricEngine
```

`Car` không cần biết implementation cụ thể là `GasEngine` hay `ElectricEngine`.

---

# 7. Composition cho phép thay đổi behavior

Ví dụ game:

```ts
interface Weapon {
  attack(): void;
}

class Sword implements Weapon {
  attack() {
    console.log("Slash!");
  }
}

class Gun implements Weapon {
  attack() {
    console.log("Bang!");
  }
}

class Player {
  constructor(private weapon: Weapon) {}

  attack() {
    this.weapon.attack();
  }
}
```

Sử dụng:

```ts
const swordPlayer = new Player(new Sword());

swordPlayer.attack();
// Slash!
```

Hoặc:

```ts
const gunPlayer = new Player(new Gun());

gunPlayer.attack();
// Bang!
```

Player không cần thay đổi.

Cấu trúc:

```text
Player
   │
   └── Weapon
        ├── Sword
        └── Gun
```

---

# 8. Vấn đề khi lạm dụng Inheritance

Nếu dùng inheritance để biểu diễn từng behavior:

```text
Player
├── SwordPlayer
├── GunPlayer
├── MagicPlayer
├── FireSwordPlayer
├── IceSwordPlayer
├── FireGunPlayer
└── ...
```

Class hierarchy sẽ nhanh chóng phình to.

Trong khi composition:

```text
Player
  │
  ├── Weapon
  │     ├── Sword
  │     ├── Gun
  │     └── Magic
  │
  └── Skill
        ├── Fire
        ├── Ice
        └── Lightning
```

Player có thể kết hợp nhiều behavior.

Đây chính là ý tưởng của:

> **Composition over inheritance**

Không có nghĩa là không được dùng inheritance.

Ý nghĩa là:

> Khi behavior/dependency có thể được lắp ghép hoặc thay thế độc lập, thường nên dùng composition thay vì tạo thêm các class inheritance.

---

# 9. Ví dụ Backend thực tế

Ví dụ payment system:

```ts
interface PaymentGateway {
  pay(amount: number): Promise<void>;
}
```

Các implementation:

```ts
class StripePayment implements PaymentGateway {
  async pay(amount: number) {
    console.log("Stripe");
  }
}

class PaypalPayment implements PaymentGateway {
  async pay(amount: number) {
    console.log("PayPal");
  }
}
```

`CheckoutService` sử dụng `PaymentGateway`:

```ts
class CheckoutService {
  constructor(
    private paymentGateway: PaymentGateway,
  ) {}

  async checkout(amount: number) {
    await this.paymentGateway.pay(amount);
  }
}
```

Sử dụng:

```ts
const stripe = new StripePayment();

const checkout = new CheckoutService(stripe);

await checkout.checkout(100);
```

Có thể thay bằng:

```ts
const paypal = new PaypalPayment();

const checkout = new CheckoutService(paypal);

await checkout.checkout(100);
```

Cấu trúc:

```text
CheckoutService
      │
      │ HAS-A
      ▼
PaymentGateway
      ▲
      │
 ┌────┴─────┐
 │          │
Stripe    PayPal
```

`CheckoutService` không cần:

```ts
class StripeCheckoutService extends CheckoutService
class PaypalCheckoutService extends CheckoutService
```

Vì payment gateway là một dependency/capability, không phải quan hệ `IS-A`.

---

# 10. Inheritance vs Composition

## Inheritance

```ts
class Animal {
  eat() {}
}

class Dog extends Animal {
  bark() {}
}
```

Quan hệ:

```text
Dog IS-A Animal
```

Đặc điểm:

- Dùng `extends`.
- Class con kế thừa behavior/state từ class cha.
- Tạo quan hệ parent-child.
- Coupling với base class thường cao hơn.

---

## Composition

```ts
class Car {
  constructor(private engine: Engine) {}
}
```

Quan hệ:

```text
Car HAS-A Engine
```

Đặc điểm:

- Object chứa hoặc sử dụng object khác.
- Dependency được truyền vào.
- Có thể thay đổi implementation.
- Thường linh hoạt hơn.
- Thường giúp giảm coupling.

---

# 11. Câu hỏi để quyết định

## Câu hỏi 1

> A có phải là một loại của B không?

Nếu:

```text
A IS-A B
```

→ Có thể cân nhắc **Inheritance**.

Ví dụ:

```text
Dog IS-A Animal
Car IS-A Vehicle
```

---

## Câu hỏi 2

> A có chứa hoặc sử dụng B không?

Nếu:

```text
A HAS-A B
```

→ Cân nhắc **Composition**.

Ví dụ:

```text
Car HAS-A Engine
Player HAS-A Weapon
CheckoutService HAS-A PaymentGateway
```

---

## Câu hỏi 3

> B có thể thay đổi độc lập với A không?

Nếu có, composition thường rất phù hợp.

Ví dụ:

```text
Player
  │
  └── Weapon
       ├── Sword
       ├── Gun
       └── Magic
```

Có thể thay `Weapon` mà không cần thay `Player`.

---

# 12. Composition + Interface

Đây là pattern rất phổ biến:

```ts
interface PaymentGateway {
  pay(amount: number): Promise<void>;
}

class StripePayment implements PaymentGateway {
  async pay(amount: number) {}
}

class PaypalPayment implements PaymentGateway {
  async pay(amount: number) {}
}

class CheckoutService {
  constructor(
    private paymentGateway: PaymentGateway,
  ) {}

  async checkout(amount: number) {
    await this.paymentGateway.pay(amount);
  }
}
```

Có ba concept kết hợp:

```text
Interface
    ↓
Contract

Composition
    ↓
CheckoutService HAS-A PaymentGateway

Polymorphism
    ↓
PaymentGateway
   ├── StripePayment
   └── PaypalPayment
```

Đây là design rất phổ biến trong:

- NestJS
- Spring
- .NET
- Clean Architecture
- Hexagonal Architecture
- Dependency Injection

---

# 13. Composition và Dependency Injection

Composition:

```ts
class Car {
  constructor(private engine: Engine) {}
}
```

Dependency Injection:

```ts
const engine = new ElectricEngine();

const car = new Car(engine);
```

Thay vì `Car` tự tạo dependency:

```ts
class Car {
  private engine = new ElectricEngine();
}
```

Ta truyền dependency từ bên ngoài:

```ts
class Car {
  constructor(private engine: Engine) {}
}
```

Lợi ích:

```text
Car
 │
 └── phụ thuộc vào abstraction
             │
             ▼
           Engine
          ▲      ▲
          │      │
        Gas    Electric
```

Dễ:

- thay implementation
- unit test
- mock dependency
- mở rộng hệ thống
- giảm coupling

---

# 14. Bảng so sánh

| | Inheritance | Composition |
|---|---|---|
| Quan hệ | **IS-A** | **HAS-A** |
| Keyword | `extends` | Property / constructor |
| Tái sử dụng | Kế thừa | Ghép object |
| Thay behavior | Khó hơn | Dễ hơn |
| Coupling | Thường cao hơn | Thường thấp hơn |
| Class hierarchy | Dễ phình | Linh hoạt |
| Runtime thay đổi | Hạn chế hơn | Dễ |
| Ví dụ | `Dog extends Animal` | `Car has Engine` |
| Phù hợp | Quan hệ cha-con thực sự | Dependency / capability / behavior |

---

# 15. Mental Model

Nhớ 3 câu này:

```text
Inheritance
    ↓
IS-A
    ↓
Dog IS-A Animal


Composition
    ↓
HAS-A
    ↓
Car HAS-A Engine


Interface
    ↓
CAN-DO
    ↓
Bird CAN-DO Flyable
```

Khi design class:

```text
"X có phải là Y không?"
        │
       YES
        ↓
   Inheritance?

"X có/sử dụng Y không?"
        │
       YES
        ↓
   Composition?

"X chỉ cần có capability/contract Y?"
        │
       YES
        ↓
     Interface
```

## Chốt

> **Inheritance** dùng để biểu diễn quan hệ `IS-A`.

> **Composition** dùng để biểu diễn quan hệ `HAS-A`.

> **Interface** thường dùng để biểu diễn `CAN-DO` / contract.

> Nếu một behavior có thể thay đổi độc lập với object chính, **composition thường linh hoạt hơn inheritance**.
