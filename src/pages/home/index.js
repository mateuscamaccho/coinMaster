import styles from './styles.module.scss'
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { IoArrowUpSharp } from 'react-icons/io5';




import { api } from '../../services/apiClient'
import { useState } from 'react'

function Home() {

    const [data, setData] = useState([])

    useState(() => {
        getCoins()
    }, [])

    async function getCoins() {
        try {
            const response = await api.get('/show')
            const data = response.data || []

            console.log(data)

            setData(data)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <section className={styles.section_moedasdigitais}>
            <div className={styles.main_container}>
                <h1>Top 10 Moedas - Em crescimento (%)</h1>

                <div className={styles.grid_layout}>
                    {data.map(item => (
                        <div key={item.id} className={styles.grid_card}>
                            <BsCurrencyBitcoin />
                            <div>
                                BitCoin
                            </div>
                            <div>
                                $50.3
                            </div>
                            <div>
                                R$150,00
                            </div>
                            <div className={styles.crescimento}>
                                <IoArrowUpSharp className={styles.card_icon_up} />
                                <span>50%</span>
                            </div>
                            <div>
                                <span>Atualizado a 3 segundos</span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Home;