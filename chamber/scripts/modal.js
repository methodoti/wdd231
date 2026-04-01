const memberModal = document.querySelector("#membership-modal");
const modalDiv = document.querySelector("#membership-modal div");
const npButton = document.querySelector("#np-button");
const bronzeButton = document.querySelector("#bronze-button");
const silverButton = document.querySelector("#silver-button");
const goldButton = document.querySelector("#gold-button");

const closeButton = document.querySelector("#closeButton");

closeButton.addEventListener("click", () => {
    memberModal.close();
})

npButton.addEventListener("click", () => {
    modalDiv.innerHTML = `
        <h4>NP Membership (Non-Profit)</h4>
        <p>Focus: Community support and basic visibility.</p>
        <p><strong>Cost:</strong> Free</p>
        <p><strong>Benefits:</strong>
        <ul>
            <li>Listing in the official Chamber Directory.</li>
            <li>Access to monthly community networking events.</li>
            <li>Member-only newsletters and local business alerts.</li>
            <li>Basic organization profile on the Chamber website.</li>
        </ul>
    `;
    memberModal.showModal();
})

bronzeButton.addEventListener("click", () => {
    modalDiv.innerHTML = `
        <h4>Bronze Membership</h4>
        <p>Focus: Small businesses and first steps in networking.</p>
        <p><strong>Cost:</strong> $150/year</p>
        <p><strong>Benefits:</strong>
        <ul>
            <li>All NP benefits included.</li>
            <li>Certificate of Membership for office display.</li>
            <li>Invitation to "Business After Hours" mixer events.</li>
            <li>10% discount on Chamber-sponsored training workshops.</li>
            <li>Social media mention on the Chamber's Facebook page.</li>
        </ul>
    `;
    memberModal.showModal();
})

silverButton.addEventListener("click", () => {
    modalDiv.innerHTML = `
        <h4>Silver Membership</h4>
        <p>Focus: Growing companies that are looking for more marketing.</p>
        <p><strong>Cost:</strong> $300/year</p>
        <p><strong>Benefits:</strong>
        <ul>
            <li>All Bronze benefits included.</li>
            <li>Access to one "Spotlight" position on the home page per year.</li>
            <li>Two complimentary tickets to the Annual Chamber Dinner.</li>
            <li>20% discount on all event registrations and advertising.</li>
            <li>Access to the Chamber’s mailing list for direct marketing.</li>
        </ul>
    `;
    memberModal.showModal();
})

goldButton.addEventListener("click", () => {
    modalDiv.innerHTML = `
        <h4>Gold Membership</h4>
        <p>Focus: Market leadership, prestige, and maximum publicity.</p>
        <p><strong>Cost:</strong> $600/year</p>
        <p><strong>Benefits:</strong>
        <ul>
            <li>All Silver benefits included.</li>
            <li><strong>Permanent Spotlight</strong> position in the business directory.</li>
            <li>Priority seating and VIP access at all Chamber events.</li>
            <li>Featured "Member of the Month" article on the website.</li>
            <li>Opportunity to host/sponsor a major Chamber event.</li>
            <li>Exclusive seat on the Chamber Advisory Committee.</li>
        </ul>
    `;
    memberModal.showModal();
})