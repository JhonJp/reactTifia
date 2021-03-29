import { Spinner } from 'reactstrap'
import React, { useState, useEffect } from 'react'
import Navigation from '../components/navigation/Navigation'
import fire from '../api/firebase'
import Mainpage from './home/main'

const Container = (prop: any) => {
  const [load, setLoading] = useState(true)
  const [nav, setNavigation] = useState([])
  let names = ['navigation']

  useEffect(() => {
    names.map((e) => {
      initialize(e)
    })
  }, []);

  const initialize = async (dbname: string) => {
    const dataArray: any = [];
    fire.database().ref(dbname).once('value', snap => {
      if (snap.val()) dataArray.push(snap.val());
    }).then(() => {
      setters(dbname, dataArray);
    }).finally(() => {
      setLoading(false)
    })
  }

  const setters = (dbname: string, result: any) => {
    switch (dbname) {
      case 'navigation':
        setNavigation(result[0])
        break;
      default: break;
    }
  }

  return (
    <>
      { load ? (
        <div>
          <Spinner color="primary" className="loading" />
        </div>
      ) : (
        <>
          <Navigation navigation={nav} />
          <Mainpage />
        </>
      )}
    </>
  );
}
export default Container;