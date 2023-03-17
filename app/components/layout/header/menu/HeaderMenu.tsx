import { FC } from 'react'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'
import Column from "@/ui/grid/Column";

import styles from './HeaderMenu.module.scss'


const HeaderMenu: FC = () => {
	return (

			<div className={styles.menu}>
				<nav>
					<ul>
						{menu.map(item => (
							<MenuItem key={item.link} item={item} />
						))}
					</ul>
				</nav>
			</div>
	// <Column size={5}>
	// 	</Column>
	)
}

export default HeaderMenu
