export enum Routes {
  // Terminal
  Terminal = '/pos',
  TerminalOrderCharge = '/pos/order/:id/charge',
  // Dashboard
  AdminDashboard = '/admin',
  AdminSettings = '/admin/settings',
  AdminCategoryList = '/admin/category/:id/list',
  AdminCategoryEdit = '/admin/category/:id/edit',
  AdminCategoryCreate = '/admin/category/:id/create',
  AdminItemList = '/admin/items',
  AdminItemEdit = '/admin/item/:id/edit',
  AdminItemCreate = '/admin/item/create',
  // Misc
  PageBadRequest = '/400',
  PageNotFound = '/404',
}