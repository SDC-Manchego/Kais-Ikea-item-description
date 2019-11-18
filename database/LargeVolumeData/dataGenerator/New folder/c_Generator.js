class c_Generator {
  generateCsvHeader() {
    return ['cof_name', 'cof_taste', 'cof_pic', 'cof_description'];
  }

  getName(i) {
    const names = ['Vietnam - Robusta', 'Indonesia - Robusta & Arabica', 'WelBrazil - Arabica', 'India - Arabica & Robusta', 'Colombia - Arabica', 'Ethiopia - Arabica', 'Uganda - Arabica & Robusta', 'Arabica', 'Robusta', 'Liberica'];
    return names[i];
  }

  getTaste(i) {
    const tastes = ['Strong', 'Normal', 'Sweeter, Softer', 'Soft', 'Sweeter', 'Softer', 'Stronger', 'Softer', 'Strong', 'Softer'];
    return tastes[i];
  }

  getPic(i) {
    const pic = `https://coffeepic.s3-us-west-1.amazonaws.com/${i}.png`;
    return pic;
  }

  getDescription(i) {
    const dess = [
      'We can say with some degree of confidence the only thing not affected by the war in Vietnam was coffee. In Vietnam, people prefer the Robusta coffee bean with a strong taste. In fact, Vietnam can be said to be the native land of Robusta. Vietnam is among top coffee exporters in the world.', 'Indonesia, which we frequently hear associated with interesting coffee types, produces 660,000,000 kg of coffee per year. Although quality and taste pale in comparison to Brazil and Colombia, it has an important place in global coffee production.', 'As you know, Brazil is one of the top coffee producing countries. In Brazil, 2,594,100 tons of coffee was produced in 2016. Among the reasons for the coffee grown in Brazil being so tasty are the wide production areas and the premium quality of the product. The coffee produced in Brazil is often preferred because it has low acidity.', 'Arabica and Robusta coffee beans are grown abundantly in India. The much renowned coffee beans grown in the south region of the country are known for their soft taste and high levels of acidity.', 'Colombia, which claims a fair share of coffee production with 810,000,000 kg per year, is just behind Brazil in terms of taste with its Arabica coffee bean. Among the delicious coffee types of Colombia are Extra and Supremo.', 'The coffee culture in Ethiopia dates back to the 800s A.D. Even historical findings show that the homeland of coffee is Ethiopia. According to a rumor, goats eating coffee beans in ancient times used to be observed by the dervishes. And the dervishes boiled the juice of the fruit the goats ate and drank it. Ethiopia, which produces 384,000,000 kg of coffee per year, has prized coffee trees that yield delicious coffee.', 'Ugandan coffee resembles African coffee in terms of its aroma and wine-like acidity. But it is not as popular as Kenyan or Ethiopian coffee. Most of the coffee produced is exported which contributes significantly to the economy. Among the important types of coffee produced in Uganda is Bugishu. ', 'Liberica is a low yield type of coffee compared to Arabica and Robusta.', 'This type of coffee, which contains 2.5% more caffeine than other types, has a pretty strong taste.', 'This coffee bean with low caffeine and a smoother taste is aromatic and delicious. 80% of the coffee in the world is produced from these types of beans.'
    ];
    return dess[i];
  }

  cGenerator(num) {
    const coffees = [];
    for (let i = 0; i < num; i += 1) {
      const coffee = [
        this.getName(i),
        this.getTaste(i),
        this.getPic(i),
        this.getDescription(i),
      ];
      coffees.push(coffee);
    }
    return coffees;
  }
}

module.exports = new c_Generator();
