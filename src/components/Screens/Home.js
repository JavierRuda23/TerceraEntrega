import { StyleSheet} from 'react-native'
import Header from '../Header'
import Categories from '../Categories'

const Home = () => {
  return (
    <>
        <Header title='Categories' />
        <Categories />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})