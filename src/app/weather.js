export class Weather{
    constructor(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
        this.apiKey = '28326a0308d330e56dc08cec6f8db032';
    }

    async getWeather(){
        const URI = `
            https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric
        `;

        const response = await fetch(URI);
        const data = response.json();

        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    };
}