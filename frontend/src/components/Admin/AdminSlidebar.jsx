import { FaBoxOpen, FaClipboardList, FaStore, FaUser } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"

const AdminSlidebar = () => {
  return (
    <div className="p-6">
        <div className="mb-6">
            <Link to="/admin" className="text-2xl font-medium">Rabbit</Link>
        </div>
        <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
        <div className="flex flex-col space-y-2">
            <NavLink to="/admin/user"  className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
                 <FaUser/>
                 <span>Users</span>
            </NavLink>
            <NavLink to="/admin/products"  className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
                 <FaBoxOpen/>
                 <span>Products</span>
            </NavLink>
            <NavLink to="/admin/orders"  className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
                 <FaClipboardList/>
                 <span>Orders</span>
            </NavLink>
            <NavLink to="/admin/orders"  className={({isActive})=>isActive?"bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2":"text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"}>
                 <FaStore/>
                 <span>Shop</span>
            </NavLink>
        </div>
    </div>
  )
}

export default AdminSlidebar