const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    const originalMethod = propertyDescriptor.value;
    
    propertyDescriptor.value = function (...args: any[]) {
      console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
      return originalMethod.apply(this, args);
    };

    return propertyDescriptor;
  };
};

export class Pokemon {
  constructor(public readonly id: number, public name: String) {}

  @Deprecated('Most use speak2 method instead')
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }
}

export const animales = new Pokemon(1, 'animales');

