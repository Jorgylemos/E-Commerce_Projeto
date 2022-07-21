import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Index = () => {

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <Link to='/registerProduct'>
        <button>Adicionar Produto</button>
      </Link>

      <Outlet />
    </div>
  )
}

export default Index