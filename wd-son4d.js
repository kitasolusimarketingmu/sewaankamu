    document.addEventListener('DOMContentLoaded', () => {
        const style = document.createElement("style");

        style.textContent = `
            .google-wrapper p,.item-service h1{text-transform:uppercase;font-weight:700!important}.count-item{font-size:1.8rem;background:#2e2c51;padding:.3rem .5rem;color:#fff!important;border-radius:10px;font-weight:700}.wrapper-service{display:flex;align-items:center;flex-wrap:wrap;justify-content:center;border-radius:10px;margin-top:1.3rem;border:3px solid #42525d;padding:.8rem}.status-wrapper,.status-wrapper-mem{display:flex;align-items:center;justify-content:center}.status-wrapper p{margin-right:.6rem!important}.item-service{margin-right:3rem}.item-service:last-child{margin-right:0}.item-service h1{font-size:2.2rem;margin-top:7px!important}.google-wrapper{background:#fff;padding:1.7rem;width:10rem;height:.5rem;border-radius:10px;position:relative}.google-wrapper img{position:absolute;width:2rem;top:9px;left:10px}.item-service p{color:#fff}.google-wrapper p{position:absolute;left:3.4rem;top:.6rem;font-size:1.5rem!important;color:#000!important}
        `;

        document.head.appendChild(style);
        const min = 12554;
        const max = 36548;
        const memberUser = Math.floor(Math.random() * (max - min + 1)) + min;

        $(' <div class="wrapper-service"><div class="item-service"><h1 style="color: #e0e25b;">Deposit</h1> <div class="status-wrapper"><p>Rata-Rata</p> <p><span class="count-item">1</span> Menit</p></div> <div class="progress21 progress-moved2"><div class="progress-bar21"></div> </div>  </div> <div class="item-service"><h1 style="color: #e0e25b;">Withdraw</h1> <div class="status-wrapper"><p>Rata-Rata</p> <p><span class="count-item">3</span> Menit</p></div> <div class="progress21 progress-moved11"><div class="progress-bar31"></div> </div> </div> <div class="item-service"><h1 style="color: #e0e25b;">Member Online</h1> <div class="status-wrapper-mem"><p> </p> <p><span class="count-item">'+ memberUser +'</span> Member</p></div>  </div> <div class="item-service"><p style="text-align: center;">Ketik Di Google:</p> <div class="google-wrapper"><img src="https://iili.io/3R5ov8F.md.png" /> <p>SON4D</p></div></div> </div>').insertBefore(".provider-group");
    });

    document.addEventListener('DOMContentLoaded', () => {
        const style = document.createElement("style");

        style.textContent = `
            .provider{padding-top:1rem;color:#fff}.login-field{width:147px}.menu span,.menu-item>label{color:#fff!important}.title-infos{text-transform:uppercase;color:#fff;font-size:1.2rem;text-align:center;display:flex;align-items:center;justify-content:center}.img-title-infos{width:40px;margin-right:.5rem}.transaksi{padding-top:1.5rem}.wrap-all-trans{display:grid;grid-template-columns:repeat(2,1fr);gap:5px}.wrapper-transactions{width:35rem;max-width:100%;padding:.7rem;margin-bottom:1rem;margin-top:1rem;border-radius:10px;border:3px solid #42525d;background:var(--result-background)}.content-trans{height:15rem;overflow:hidden;position:relative}.avatar-trans{width:2rem;max-width:100%;margin-right:.7rem}.avatar-wrapper{display:flex;justify-content:center}.item-trans{color:#fff;background:#2e2c51;display:flex;width:100%;border:1px solid #42525d;justify-content:space-between;align-items:center;border-radius:5px;font-size:1rem;margin-bottom:.45rem!important;padding:.4rem;position:relative;bottom:0;animation:40s linear infinite moveUp}.rupiah-trans{color:#fff;font-weight:700}.text-centertitle{color:#fff;margin-top:0;padding-bottom:.5rem;font-size:1.15rem;font-weight:700}.divider-trans{margin-top:14px!important;border-top:1px solid rgb(0 0 0)}.menu-alternatif{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;list-style-type:none;gap:8px;margin-bottom:.5rem}.menu-alternatif li:first-child{background:3px #42525d;text-transform:uppercase;box-shadow:none}.menu-alternatif li{padding:.8rem;font-size:1.3rem;font-weight:700;border:3px solid #42525d;border-radius:0 25px;box-shadow:5px 3px 20px #000}@keyframes moveUp{0%{transform:translateY(0)}100%{transform:translateY(-1500px)}}@keyframes glowing{0%,100%{background-position:0 0}50%{background-position:400% 0}}@media only screen and (max-width:1000px){.wrap-all-trans{display:block}.wrapper-transactions{width:100%}.gambar-samping{display:none}.menu-alternatif li{width:100%;text-align:center;padding:.3rem;font-size:1rem}}.btn-promosi,.login-field,.login-form>button,.wikwik{border-radius:5px}
        `;
        document.head.appendChild(style);

        // General Setting
        const getLoginBtn = document.querySelector('.btn.btn-masuk.fw-bold.p-0.px-2.submit');
        const getPromosiBtn = document.querySelector('.btn-promosi.fw-bold.desktop-only');
        getLoginBtn.textContent = 'Masuk';
        getPromosiBtn.textContent = 'PROMOSI';
        // Withdraw & Deposit
        const getProvider = document.querySelector('.provider-group');
        const transWrap = document.createElement('div');
        transWrap.className = 'wrapper-transactions';
        const transWrapDp = document.createElement('div');
        transWrapDp.className = 'wrapper-transactions';
        const transContent = document.createElement('div');
        transContent.className = 'content-trans';
        const transContentDp = document.createElement('div');
        transContentDp.className = 'content-trans';
        const makeDp = document.createElement('div');
        makeDp.className = 'deposit-members';
        const makeWd = document.createElement('div');
        makeWd.className = 'withdraw-members';
        const titleDp = document.createElement('h3');
        titleDp.className = 'text-centertitle';
        titleDp.textContent = 'NEW DEPOSIT';
        const titleWd = document.createElement('h3');
        titleWd.className = 'text-centertitle';
        titleWd.textContent = 'NEW WITHDRAW';
        transContentDp.appendChild(makeDp);
        transContent.appendChild(makeWd);
        transWrapDp.appendChild(titleDp);
        transWrap.appendChild(titleWd);
        transWrapDp.appendChild(transContentDp);
        transWrap.appendChild(transContent);
        const wrapAllTrans = document.createElement('div');
        wrapAllTrans.className = 'wrap-all-trans';
        wrapAllTrans.appendChild(transWrapDp);
        wrapAllTrans.appendChild(transWrap);
        getProvider.parentNode.insertBefore(wrapAllTrans, getProvider);

        function getDeposit() {
            $.ajax({
                url: 'https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json',
                type: 'GET',
                dataType: 'JSON',
                success: function(response) {
                    const getUser = randomUser(response.slice(0, 50));
                    $.each(getUser, function(index, items) {
                        // IDR Value
                        const dana_wd = uangRupiahDp(10000, 900000);
                        $('.deposit-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="https://res.cloudinary.com/debzgxmze/image/upload/v1742389391/icon_v5tjnr.png" class="avatar-trans" />' + items.user + ' | Deposit:</div> <span class="rupiah-trans">Rp.' + dana_wd + '</span></div>');
                    });
                }
            })
        }

        function getWithdraw() {
            $.ajax({
                url: 'https://cdn.jsdelivr.net/gh/zombief1206/idn-design@main/users.json',
                type: 'GET',
                dataType: 'JSON',
                success: function(response) {
                    const getUser = randomUser(response.slice(0, 50));
                    $.each(getUser, function(index, items) {
                        // IDR Value
                        const dana_wd = uangRupiah(500000, 10000000);
                        $('.withdraw-members').append('<div class="item-trans"><div class="avatar-wrapper"><img src="https://res.cloudinary.com/debzgxmze/image/upload/v1742389391/icon_v5tjnr.png" class="avatar-trans" />' + items.user + ' | Withdraw:</div> <span class="rupiah-trans">Rp.' + dana_wd + '</span></div>');
                    });
                }
            })
        }

        function uangRupiah(min, max) {
            function getRandomRoundNumber(min, max) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                const returnNum = Math.floor(randomNumber / 100000) * 100000;
                if (returnNum != 0 || !isNaN(returnNum)) {
                    return returnNum;
                }
            }
            const randomRoundNumber = getRandomRoundNumber(min, max);
            const roundedNumber = randomRoundNumber;
            return new Intl.NumberFormat().format(roundedNumber);
        }

        function uangRupiahDp(min, max) {
            function getRandomRoundNumber(min, max) {
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                const returnNum = Math.floor(randomNumber / 20000) * 20000;
                if (returnNum != 0 || !isNaN(returnNum)) {
                    return returnNum;
                }
            }
            const randomRoundNumber = getRandomRoundNumber(min, max);
            const roundedNumber = randomRoundNumber;
            return new Intl.NumberFormat().format(roundedNumber);
        }

        function randomUser(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;
            // While there remain elements to shuffle
            while (0 !== currentIndex) {
                // Pick a remaining element
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // Swap it with the current element
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
        getWithdraw();
        getDeposit();
        LinkAlternatif();
    });
