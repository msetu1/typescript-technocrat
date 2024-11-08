// TypeScript OOP: Classes and Objects Made Easy
// এই ব্লগে আমরা TypeScript-এর ক্লাস ও অবজেক্ট সম্পর্কে জানব। ক্লাস ও অবজেক্ট হল অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)-এর মৌলিক ভিত্তি। ক্লাস হল একটি ব্লুপ্রিন্ট যা অবজেক্ট তৈরি করতে ব্যবহার করা হয়, এবং অবজেক্ট হল ক্লাসের একটি ইন্সট্যান্স। ক্লাসগুলি ডেটা (গুণাবলী) এবং মেথড (পদ্ধতি) কে একক ইউনিটে একত্রিত করে যা কোনও সত্তার প্রকৃতি বর্ণনা করে।
// ক্লাস কি?
// ক্লাস একটি ব্লুপ্রিন্ট যা অবজেক্ট তৈরি করতে ব্যবহার করা হয়। ক্লাসগুলিতে ডেটা (গুণাবলী) এবং মেথড (ফাংশন) থাকতে পারে। ডেটা বলতে বোঝায় নাম, বয়স, বা ঠিকানা এর মতো প্রপার্টি গুলকে। আর মেথড বলতে বোঝায় অবজেক্টের আচরণ, যেমনঃ কোন কিছু কনসোল লগ করা, রিটার্ন করা ইত্যাদি।
// অবজেক্ট কি:
// অবজেক্ট হল একটি ক্লাসের ইনস্ট্যান্স। ক্লাস হল একটি ব্লুপ্রিন্ট যা অবজেক্ট তৈরি করতে ব্যবহার করা হয়। ক্লাসে ডেটা এবং মেথড থাকতে পারে।
// কিভাবে ক্লাস তৈরি করব?
// একটি ক্লাস তৈরি করতে, আমরা class কিওয়ার্ড ব্যবহার করি, তারপর ক্লাসের নাম, এবং তারপর একটি কোড ব্লক।
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   displayInfo(): void {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }
// এই উদাহরণে, আমরা একটি Person নামক একটি ক্লাস তৈরি করেছি। এই ক্লাসে দুটি ডেটা রয়েছে: name এবং age। এই ডেটার একটি string এবং একটি number রিসিভ করতে পারে। ক্লাসে একটি মেথড ও রয়েছে, displayInfo(), যা Person এর নাম এবং বয়স কনসোল লগ করে।
// কিভাবে অবজেক্ট তৈরি করব?
// একটি অবজেক্ট তৈরি করতে, আমরা new কিওয়ার্ড ব্যবহার করে ক্লাসের ইনস্ট্যান্ট করি, তারপর ক্লাসটি কল করে প্রয়োজনীয় ভ্যালু পাঠাতে হয়। আমরা Person ক্লাসে constructor কিওয়ার্ড ব্যাবহার করে ক্লাসের একটি অবজেক্ট তৈরি করেছি।
// // অবজেক্ট তৈরি
// const person1 = new Person("John Doe", 25);
// এখানে Person হল ক্লাসের নাম, এবং person1 হল অবজেক্টের নাম। এই অবজেক্ট এর মাধ্যমে আপনি displayInfo মেথড বা name এবং age প্রপার্টিজ এক্সেস করতে পারবেন।
// এভাবে, আপনি ক্লাস দিয়ে অবজেক্ট তৈরি করতে পারবেন এবং সেই অবজেক্ট এর মাধ্যমে প্রপার্টিজ এবং মেথডগুলি ব্যবহার করতে পারবেন।
// কিভাবে অবজেক্ট অ্যাক্সেস করব?
// ক্লাসের প্রোপার্টি ও মেথড অ্যাক্সেস করতে, আমরা ডট নোটেশন ব্যবহার করি।
// person1.name = "John Doe";
// person1.age = 30;

// person1.displayInfo();
// ঝটপট কিছু গুরুত্বপূর্ণ Topic জেনে নেই
// typeof অপারেটরটি ব্যবহার করা হয় কোন ভ্যারিয়েবল বা একটি এক্সপ্রেশনের ডেটা টাইপ জানতে। এটি রান টাইমে একটি অবজেক্ট বা ভ্যারিয়েবলের ডেটা টাইপ রিটার্ন করে।let x: number = 10; console.log(typeof x); // আউটপুট: number
// instanceof অপারেটরটি ব্যবহার করা হয় একটি অবজেক্ট কোন ক্লাসের ইনস্ট্যান্স তা চেক করতে। এটি সত্য অথবা মিথ্যা রিটার্ন করে।class Car { brand: string; constructor(brand: string) { this.brand = brand; } } const myCar = new Car("Toyota"); console.log(myCar instanceof Car); // আউটপুট: true
// Access modifiers ক্লাসের প্রোপার্টি এবং মেথডগুলির এক্সেস কন্ট্রোল করে। TypeScript এ আমরা তিন ভাবে অ্যাক্সেস মোডিফায় করতে পারিঃ public, private, এবং protected।class Person { public name: string; // সকল স্থানে এক্সেস করা যাবে। private age: number; // শুধুমাত্র ক্লাসের মধ্যে এক্সেস করা যাবে। protected address: string; // ক্লাস এবং এর সাবক্লাসে এক্সেস করা যাবে। constructor(name: string, age: number, address: string) { this.name = name; this.age = age; this.address = address; } }
// Getters ক্লাসের প্রোপার্টির মান পেতে এবং ক্লাসের বাইরে এই মান পেতে ব্যবহার করা হয়। গেটার মেথডের নামের প্রিফিক্স হয় get।class Circle { private _radius: number; constructor(radius: number) { this._radius = radius; } get radius(): number { return this._radius; } } const myCircle = new Circle(5); console.log(myCircle.radius); // আউটপুট: 5
// Setters ক্লাসের প্রোপার্টির মান পরিবর্তন করতে এবং ক্লাসের বাইরে এই মান সেট করতে ব্যবহার করা হয়। সেটার মেথডের নামের প্রিফিক্স হয় set।class Circle { private _radius: number; constructor(radius: number) { this._radius = radius; } get radius(): number { return this._radius; } set radius(value: number) { if (value > 0) { this._radius = value; } else { console.error("Radius must be greater than 0."); } } } const myCircle = new Circle(5); myCircle.radius = 10; console.log(myCircle.radius); // আউটপুট: 10
// Static Membersস্ট্যাটিক মেম্বার হল এমন মেম্বার যা একটি ক্লাসের ইনস্ট্যান্স তৈরি না করে ক্লাসের নাম এবং ডট নোটেশন ব্যবহার করে প্রোপার্টি এবং মেথড সমুহ অ্যাক্সেস করা যায়। Static মেথড হল এমন মেথড যা ক্লাসের সমস্ত অবজেক্টগুলির জন্য একই মান প্রদান করে। উদাহরণস্বরূপ, আমরা একটি ক্লাস তৈরি করেছি MathOperations নামে, যার একটি স্ট্যাটিক মেম্বার হিসেবে PI এবং একটি স্ট্যাটিক মেথড হিসেবে calculateArea আছে:class MathOperations { static PI: number = 3.1416; static calculateArea(radius: number): number { return this.PI * radius * radius; } } const operations = new MathOperations(); console.log(operations.PI); // আউটপুট: 3.1416 console.log(MathOperations.PI); // আউটপুট: 3.1416 console.log(this.PI); // আউটপুট: undefined এই স্ট্যাটিক মেম্বার এবং মেথড সব MathOperations ক্লাসের ইনস্ট্যান্সের মধ্যে একই থাকবে।এই ব্লগে আমরা TypeScript-এ ক্লাস, অবজেক্ট এবং ক্লাসের সাথে সংশ্লিষ্ট কিছু ইম্পরট্যান্ট টপিক সংক্ষিপ্ত আকারে কভার করার চেষ্টা করেছি। আশা করছি এই ব্লগটি আপনাদের লার্নিং এ কিছুটা হেল্প করবে।Let’s code your career!
// #blog #moderator #oop #TypeScript