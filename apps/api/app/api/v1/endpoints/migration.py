from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_migration():
    return {'status': 'ok'}
