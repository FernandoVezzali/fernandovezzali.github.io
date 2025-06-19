---
sidebar_position: 9
---

# Object Calisthenics in CSharp

This document presents examples in **C#** that demonstrate the **violation** and **correct application** of each of the 9 Object Calisthenics rules.

---

## 1. One level of indentation per method

**Wrong:**
```csharp
void ProcessOrder(Order order)
{
    if (order != null)
    {
        if (order.IsPaid)
        {
            Ship(order);
        }
    }
}
```

**Correct:**
```csharp
void ProcessOrder(Order order)
{
    if (order == null) return;
    if (!order.IsPaid) return;

    Ship(order);
}
```

---

## 2. Don’t use the else keyword

**Wrong:**
```csharp
string GetStatusMessage(User user)
{
    if (user.IsActive)
    {
        return "Active";
    }
    else
    {
        return "Inactive";
    }
}
```

**Correct:**
```csharp
string GetStatusMessage(User user)
{
    if (!user.IsActive)
        return "Inactive";

    return "Active";
}
```

---

## 3. Wrap all primitives and strings

**Wrong:**
```csharp
public class User
{
    public string Email;
}
```

**Correct:**
```csharp
public class Email
{
    private readonly string _value;

    public Email(string value)
    {
        if (!value.Contains("@")) throw new ArgumentException("Invalid email.");
        _value = value;
    }

    public override string ToString() => _value;
}

public class User
{
    public Email Email { get; }

    public User(Email email)
    {
        Email = email;
    }
}
```

---

## 4. First class collections

**Wrong:**
```csharp
public class Order
{
    public List<Item> Items = new List<Item>();
}
```

**Correct:**
```csharp
public class Items
{
    private readonly List<Item> _items;

    public Items(IEnumerable<Item> items)
    {
        _items = new List<Item>(items);
    }

    public decimal TotalPrice() => _items.Sum(item => item.Price);
}

public class Order
{
    public Items Items { get; }

    public Order(Items items)
    {
        Items = items;
    }
}
```

---

## 5. One dot per line

**Wrong:**
```csharp
decimal total = order.GetCustomer().GetAddress().GetCity().GetTaxRate();
```

**Correct:**
```csharp
decimal total = order.GetTaxRate();

public class Order
{
    private Customer _customer;

    public decimal GetTaxRate()
    {
        return _customer.GetTaxRate();
    }
}
```

---

## 6. Don’t abbreviate

**Wrong:**
```csharp
public class Emp
{
    public string Nm { get; set; }
}
```

**Correct:**
```csharp
public class Employee
{
    public string Name { get; set; }
}
```

---

## 7. Keep all entities small

**Wrong:**
```csharp
public class ReportGenerator
{
    // 200+ lines generating, saving, formatting, printing reports
}
```

**Correct:**
```csharp
public class ReportGenerator { }
public class ReportSaver { }
public class ReportPrinter { }
```

---

## 8. No classes with more than two instance variables

**Wrong:**
```csharp
public class Car
{
    public string Make;
    public string Model;
    public int Year;
    public string LicensePlate;
}
```

**Correct:**
```csharp
public class Car
{
    public CarInfo Info { get; }
    public LicensePlate Plate { get; }

    public Car(CarInfo info, LicensePlate plate)
    {
        Info = info;
        Plate = plate;
    }
}

public class CarInfo
{
    public string Make { get; }
    public string Model { get; }
    public int Year { get; }

    public CarInfo(string make, string model, int year)
    {
        Make = make;
        Model = model;
        Year = year;
    }
}
```

---

## 9. No getters/setters/properties

**Wrong:**
```csharp
public class Account
{
    public decimal Balance { get; set; }
}
```

**Correct:**
```csharp
public class Account
{
    private decimal _balance;

    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Invalid amount");
        _balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount > _balance) return false;
        _balance -= amount;
        return true;
    }
}
```
