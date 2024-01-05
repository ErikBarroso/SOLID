export default abstract class Item {
  category: string;
  description: string;
  price: number;
  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
// calculartaxas n é papel do item1
// O do solid => item está fechado para modificação, e as subclasses que vão ser obrigadas a implementarem o calculateTaxes
// eu n preciso ficar modificando minha classe por mudanças externas [ todas as vezes que surgir um novo item, ou as taxas mudarem, ou qualquer coisa nos itens mudarem...]
