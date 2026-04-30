from fastapi import APIRouter
router = APIRouter()
@router.get('/inventory')
def get_inventory():
    return {'status': 'ok'}
@router.get('/trusts')
def get_trusts():
    return {'status': 'ok'}
