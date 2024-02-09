import React from 'react'
import { MainContent } from '../bodys/mainContent'
import { Route, Routes } from 'react-router'

export const IndexRoutes = () => {

	return (
		<Routes>
			<Route path='/*' element={<MainContent />} />
		</Routes>
	)
}