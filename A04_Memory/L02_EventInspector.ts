namespace random_test {
    let list: string[] = ["klaus", "peter", "Dieta", "HÄRBERT"];
    list = list.sort(() => Math.random() - 0.5);
    console.log(list);
    }