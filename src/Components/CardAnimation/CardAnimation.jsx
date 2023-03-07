import "./CardAnimatiom.css"
function CardAnimation() {
    return (<>

        <header>
            <h1>weather cards</h1>
        </header>
        <ul class="grid-container">
            <li class="grid-item">
                <div class="card card-rain">
                    <div class="rain"></div>
                </div>
                <div class="status">
                    <p>71 &#8457;</p>
                    <p>Showers</p>
                </div>
            </li>
            <li class="grid-item">
                <div class="card card-snow">
                    <div class="snow"></div>
                </div>
                <div class="status">
                    <p>71 &#8457;</p>
                    <p>Light flurry</p>
                </div>
            </li>
            <li class="grid-item">
                <div class="card card-storm">
                    <div class="storm"></div>
                </div>
                <div class="status">
                    <p>71 &#8457;</p>
                    <p>Thunderstorms</p>
                </div>
            </li>
            <li class="grid-item">
                <div class="card card-sunny">
                    <div class="sunny"></div>
                </div>
                <div class="status">
                    <p>71 &#8457;</p>
                    <p>Mostly sunny</p>
                </div>
            </li>
        </ul>
    </>)
}
export { CardAnimation }