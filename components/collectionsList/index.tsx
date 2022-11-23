import { StoreGetProductsParams } from "@medusajs/medusa";
import { useCollections } from "medusa-react";
import { ChangeEvent } from "react";

type CollectionListProps = {
  collectionFilter: StoreGetProductsParams;
  setCollectionFilter: (collectionFilter: StoreGetProductsParams) => void;
};

const CollectionList = ({
  collectionFilter,
  setCollectionFilter,
}: CollectionListProps) => {
  const { collections, isLoading } = useCollections();

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target;

    const collectionIds = collectionFilter.collection_id || [];

    const exists = collectionIds.includes(id);

    if (checked && !exists) {
      setCollectionFilter({
        ...collectionFilter,
        collection_id: [...collectionIds, id],
      });

      return;
    }

    if (!checked && exists) {
      setCollectionFilter({
        ...collectionFilter,
        collection_id: collectionIds.filter((c) => c !== id),
      });

      return;
    }

    return;
  };

  return (
    <div>
      <div className="px-8 py-4  small:pr-0 small:pl-8 small:min-w-[250px]">
        <div className="flex gap-x-3 small:flex-col small:gap-y-3">
          <span className="text-base-semi">Collections</span>
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2">
            {collections?.map((c) => (
              <li key={c.id}>
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={collectionFilter.collection_id?.includes(
                      c.id
                    )}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-amber-200"
                  />
                  {c.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
