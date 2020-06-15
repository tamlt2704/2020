const puppeteer = require('puppeteer')
const moment = require('moment')

void(
    async () => {
        try {
            const browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            })

            const page = await browser.newPage()

            await page.goto('https://portal.vietcombank.com.vn/Personal/TG/Pages/ty-gia.aspx')
            
            const input = await page.$('#txttungay')
            await input.click({clickCount: 3})
            await input.type('01/06/2020')
            await page.keyboard.press(String.fromCharCode(13))
            await page.keyboard.press('Enter')
            await page.waitFor('#interest-rates')
            await page.waitFor(5000)
            // const element = await page.$('#interest-rates')
            const element = await page.$('#ctl00_Content_ExrateView')
            const text = await page.evaluate(element => element.innerHTML, element)
            console.log( text )
            await page.screenshot({
                path: './page1.png'
            })

            await browser.close()
        } catch (err) {
            console.log(err)
        }
    }
)()

var datetime = new Date('2020-01-01 00:00:00')
for (var i = 0; i < 10; i++) {
    var newdate = moment(datetime, 'YYYY-MM-DD').add(i, 'days')
    console.log( newdate.format('YYYY-MM-DD') )
}
