class ProcessorCore
{
    constructor()
    {
        this.level = 0;
    }

    getBoost(level)
    {
        return new Decimal(25 * Math.min(10, 1 + level)).mul(Decimal.pow(275 / 250, Math.max(level - 9, 0)));
    }

    getPrice(level)
    {
        let priceMult = level > 10 ? 1.25 * Math.floor(level / 10) : 1;
        return new Decimal(250 + 150 * Math.pow(level, 1.3) * priceMult);
    }

    getCurrentPrice()
    {
        return this.getPrice(this.level);
    }

    getCurrentBoost()
    {
        return this.getBoost(this.level);
    }

    upgrade()
    {
        if(game.isotopes.amount.gte(this.getCurrentPrice()))
        {
            game.isotopes.amount = game.isotopes.amount.sub(this.getCurrentPrice());
            this.level++;
        }
    }
}